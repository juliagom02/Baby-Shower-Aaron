function ouvrirInvitation(){

    const enveloppe = document.querySelector(".envelope");

    enveloppe.style.transform = "scale(1.15)";
    enveloppe.style.opacity = "0";

    document.body.style.transition = "1s";

    setTimeout(() => {
        window.location.href = "invitation.html";
    }, 1000);

}
