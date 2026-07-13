/* ==========================================================================
   CareConnect Manifest Validation Core Engine & Transaction Dispatch Layer
   Author: Senior Frontend Engineer CHALLA
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    initBookingInterfaceEngine();
});

function initBookingInterfaceEngine() {
    const form = document.getElementById('careConnectBookingForm');
    if (!form) return;

    // Isolate context parameters from search variables
    const urlParams = new URLSearchParams(window.location.search);
    const doctorId = urlParams.get('id');
    const assignedSlot = urlParams.get('slot');

    const targetDoc = window.careConnectDoctorsData?.find(d => d.id === doctorId);

    // Bounce structural exceptions if parameter data nodes mismatch configurations
    if (!targetDoc || !assignedSlot) {
        alert('Data parameters missing. Re-routing back to source matrix catalogs.');
        window.location.href = 'doctors.html';
        return;
    }

    // Auto-populate diagnostic interface text targets
    document.getElementById('metaDisplayDoctor').value = targetDoc.name;
    document.getElementById('metaDisplayDept').value = targetDoc.department;
    document.getElementById('bookingSlot').value = assignedSlot;

    // Set fallback min restriction parameters on chronological date picker matching today's timezone baseline
    const dateInput = document.getElementById('bookingDate');
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    dateInput.min = `${year}-${month}-${day}`;

    // Rig dynamic validation event tracking loops
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        if (executeValidationSuite()) {
            const appointmentToken = compileManifestPayload(targetDoc);
            
            // Commit payload manifest safely down to browser client space parameter local registers
            localStorage.setItem('careConnectActiveTicket', JSON.stringify(appointmentToken));
            
            // Redirect smoothly to summary ticket extraction terminal page
            window.location.href = 'summary.html';
        }
    });
}

/**
 * Executes a structural form data validation check against all fields
 */
function executeValidationSuite() {
    let isValidState = true;

    // Target Field References
    const name = document.getElementById('patientName');
    const email = document.getElementById('patientEmail');
    const phone = document.getElementById('patientPhone');
    const age = document.getElementById('patientAge');
    const gender = document.getElementById('patientGender');
    const date = document.getElementById('bookingDate');

    // Email Pattern matching architecture standard RFC 5322
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    // General 10 digit Indian cellular index sequence validation check
    const phoneRegex = /^[6-9]\d{9}$/;

    // Field node evaluation helper structure
    const checkNode = (inputElement, condition) => {
        const container = document.getElementById(`container_${inputElement.id}`);
        if (!condition) {
            container.classList.add('invalid');
            isValidState = false;
        } else {
            container.classList.remove('invalid');
        }
    };

    checkNode(name, name.value.trim().length >= 3);
    checkNode(email, emailRegex.test(email.value.trim()));
    checkNode(phone, phoneRegex.test(phone.value.trim()));
    
    const ageVal = parseInt(age.value, 10);
    checkNode(age, !isNaN(ageVal) && ageVal >= 1 && ageVal <= 125);
    checkNode(gender, gender.value !== '');

    // Validate future chronological boundary choices criteria
    let dateValid = false;
    if (date.value) {
        const selectedDate = new Date(date.value);
        selectedDate.setHours(0,0,0,0);
        const currentDateBoundary = new Date();
        currentDateBoundary.setHours(0,0,0,0);
        dateValid = selectedDate >= currentDateBoundary;
    }
    checkNode(date, dateValid);

    return isValidState;
}

/**
 * Transforms structural input elements down into a persistent object configuration packet
 */
function compileManifestPayload(doctorObject) {
    const generateUniqueTicketId = () => {
        const timestampSegment = Date.now().toString(36).toUpperCase().slice(-4);
        const numericalRandomSegment = Math.floor(1000 + Math.random() * 9000);
        return `CC-${timestampSegment}-${numericalRandomSegment}`;
    };

    return {
        ticketId: generateUniqueTicketId(),
        doctorName: doctorObject.name,
        department: doctorObject.department,
        hospital: doctorObject.hospital,
        consultationFee: doctorObject.consultationFee,
        patientName: document.getElementById('patientName').value.trim(),
        patientEmail: document.getElementById('patientEmail').value.trim(),
        patientPhone: document.getElementById('patientPhone').value.trim(),
        patientAge: document.getElementById('patientAge').value,
        patientGender: document.getElementById('patientGender').value,
        bookingDate: document.getElementById('bookingDate').value,
        bookingSlot: document.getElementById('bookingSlot').value,
        clinicalPayloadMessage: document.getElementById('patientMessage').value.trim() || "No additional pathological description logged."
    };
}