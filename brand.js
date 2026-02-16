// Is file mein aap apna Brand Name badal sakte hain
const brandConfig = {
    BRAND_NAME: "THE LALIT ROYAL SCHOOL", // Yahan apna naya naam likhein (Capital letters mein)
    LOGO_PATH: "logo.png"
};

// Ye function HTML mein jahan bhi 'brand-name' class hogi, wahan naam bhar dega
function updateBrandName() {
    const elements = document.querySelectorAll('.brand-name-display');
    elements.forEach(el => {
        el.innerText = brandConfig.BRAND_NAME;
    });
    
    // Browser tab ka title badalne ke liye
    document.title = brandConfig.BRAND_NAME + " - Admission System";
}

// Page load hote hi ise chalayein
window.addEventListener('DOMContentLoaded', updateBrandName);
