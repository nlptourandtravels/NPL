// Toggle 'Other' Vehicle Input Field
function toggleOtherVehicle(selectObj) {
    const otherBox = document.getElementById('other-vehicle-box');
    const customInput = document.getElementById('custom-car-name');

    if (selectObj.value === 'Other') {
        otherBox.classList.add('show-field');
        customInput.setAttribute('required', 'required');
    } else {
        otherBox.classList.remove('show-field');
        customInput.removeAttribute('required');
        customInput.value = '';
    }
}

// Full Data Scanning WhatsApp Redirection
function sendToWhatsapp(event) {
    event.preventDefault();

    // 🔴 Apna WhatsApp Number yahan update karein (with country code, without +)
    const phoneNumber = "917755843110";

    // Saara data strictly form se scan karna
    const name = document.getElementById('cust-name').value;
    const pickup = document.getElementById('pickup-loc').value;
    const drop = document.getElementById('drop-loc').value;
    const dateTime = document.getElementById('date-time').value;

    // Vehicle select selection logic
    let vehicle = document.getElementById('car-type').value;
    if (vehicle === 'Other') {
        const customCar = document.getElementById('custom-car-name').value;
        vehicle = customCar ? customCar + " (Custom)" : "Other";
    }

    const comments = document.getElementById('comments').value || "None";

    // Standard Template Literal format for scanning all variables flawlessly
    let rawText = `*New Ride Booking Request* 🚗\n\n` +
        `*Name:* ${name}\n` +
        `*Pickup:* ${pickup}\n` +
        `*Drop:* ${drop}\n` +
        `*Date & Time:* ${dateTime}\n` +
        `*Vehicle Choice:* ${vehicle}\n` +
        `*Comments:* ${comments}`;

    // Poore text ko ek saath safely encode karna taaki data break na ho
    const encodedMessage = encodeURIComponent(rawText);

    // Final URL structure
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;

    // Redirecting user to WhatsApp window
    window.open(whatsappUrl, '_blank');
}