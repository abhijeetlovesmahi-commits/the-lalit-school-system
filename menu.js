function loadMenu() {
    const menuHTML = `
    <input type="checkbox" id="menu-check" style="display:none;">
    <label for="menu-check" style="position:fixed; top:15px; left:15px; z-index:10001; background:#002366; color:#D4AF37; padding:10px 15px; border-radius:5px; cursor:pointer; border:1px solid #D4AF37;">
        <i class="fas fa-bars"></i> MENU
    </label>
    <div class="sidebar" style="width: 260px; background: #002366; height: 100vh; position: fixed; left: -300px; top: 0; transition: 0.4s; z-index: 10000; border-right: 3px solid #D4AF37;">
        <div style="padding:40px 20px; text-align:center; border-bottom:1px solid rgba(212,175,55,0.3);">
            <h4 style="color:#D4AF37; font-family:'Cinzel';">THE LALIT</h4>
        </div>
        <div class="nav-links" style="padding:20px;">
            <a href="index.html" style="color:white; display:block; padding:12px; text-decoration:none;"><i class="fas fa-home me-2"></i> Dashboard</a>
            <a href="view-students.html" style="color:white; display:block; padding:12px; text-decoration:none;"><i class="fas fa-users me-2"></i> Student List</a>
            <a href="add-student.html" style="color:white; display:block; padding:12px; text-decoration:none;"><i class="fas fa-user-plus me-2"></i> Admission</a>
            <a href="fee-master.html" style="color:white; display:block; padding:12px; text-decoration:none;"><i class="fas fa-coins me-2"></i> Fee Master</a>
            <a href="collect-fees.html" style="color:white; display:block; padding:12px; text-decoration:none;"><i class="fas fa-wallet me-2"></i> Collect Fees</a>
            <a href="fee-demand-slip.html" style="color:white; display:block; padding:12px; text-decoration:none;"><i class="fas fa-file-invoice me-2"></i> Demand Slip</a>
        </div>
    </div>
    <style>
        #menu-check:checked ~ .sidebar { left: 0 !important; }
        .main-content { margin-left: 0; transition: 0.4s; padding-top: 70px !important; }
    </style>
    `;
    document.body.insertAdjacentHTML('afterbegin', menuHTML);
}

// Ye line sabse important hai, ye har page pe menu chalayegi
if (document.readyState === 'complete') {
    loadMenu();
} else {
    window.addEventListener('load', loadMenu);
}
