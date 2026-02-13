/* THE LALIT INTERNATIONAL SCHOOL - UPDATED MENU */

function loadMenu() {
    if (document.getElementById('sidebar-wrapper')) return;

    // Har page par Icons lane ke liye Font Awesome ko inject karna
    if (!document.getElementById('fa-icons-link')) {
        const fa = document.createElement('link');
        fa.id = 'fa-icons-link';
        fa.rel = 'stylesheet';
        fa.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css';
        document.head.appendChild(fa);
    }

    const menuHTML = `
    <div id="sidebar-wrapper">
        <div id="sidebar-overlay" onclick="toggleMenu(false)"></div>
        
        <div id="menu-trigger" onclick="handleMenuClick(event)">
            <div class="bar1"></div>
            <div class="bar2"></div>
            <div class="bar3"></div>
        </div>

        <div id="mySidebar" class="sidebar">
            <div class="sidebar-header">
                <img src="logo.png" class="menu-logo" onerror="this.src='https://via.placeholder.com/65'">
                <h4 class="school-name">THE LALIT</h4>
            </div>
            
            <nav class="nav-links">
                <a href="index.html"><i class="fas fa-home"></i> Dashboard</a>
                <a href="view-students.html"><i class="fas fa-users"></i> Student Registry</a>
                <a href="add-student.html"><i class="fas fa-user-plus"></i> Admission</a>
                <a href="fee-master.html"><i class="fas fa-cog"></i> Fee Structure</a>
                <a href="exam-master.html"><i class="fas fa-book-open"></i> Exam Master</a>
                <a href="marks-entry.html"><i class="fas fa-book-open"></i> Marks Entry</a>
                <a href="collect-fees.html"><i class="fas fa-money-bill-wave"></i> Collect Fees</a>
                <a href="fee-history.html"><i class="fas fa-history"></i> Fee History</a>
                <a href="fee-demand-slip.html"><i class="fas fa-file-invoice"></i> Demand Slips</a>
                <a href="attendance.html"><i class="fas fa-calendar-check"></i> Attendance</a>
                <a href="defaulter-list.html"><i class="fas fa-exclamation-triangle"></i> Defaulter List</a>
            </nav>
        </div>

        <style>
            @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@700&family=Poppins:wght@400;500&display=swap');

            #menu-trigger {
                position: fixed; top: 20px; left: 20px; z-index: 20000;
                cursor: pointer; display: inline-block; padding: 5px;
            }
            .bar1, .bar2, .bar3 {
                width: 30px; height: 3px; background-color: #002366;
                margin: 6px 0; transition: 0.4s; border-radius: 2px;
            }
            .change .bar1 { transform: rotate(-45deg) translate(-8px, 7px); background-color: #D4AF37; }
            .change .bar2 { opacity: 0; }
            .change .bar3 { transform: rotate(45deg) translate(-8px, -8px); background-color: #D4AF37; }

            .sidebar {
                width: 280px; background: #002366; height: 100vh;
                position: fixed; left: -300px; top: 0; 
                transition: 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                z-index: 15000; border-right: 4px solid #D4AF37; overflow-y: auto;
                font-family: 'Poppins', sans-serif;
            }
            .sidebar.open { left: 0; }

            #sidebar-overlay {
                position: fixed; display: none; width: 100%; height: 100%;
                top: 0; left: 0; background-color: rgba(0,0,0,0.5); 
                z-index: 10000; cursor: pointer;
            }

            .sidebar-header { padding: 40px 20px; text-align: center; border-bottom: 1px solid rgba(212,175,55,0.2); }
            
            /* Circular Logo Frame Style */
            .menu-logo { 
                width: 80px; 
                height: 80px; 
                object-fit: contain;
                background: white; 
                border-radius: 50%; 
                padding: 5px; 
                border: 3px solid #D4AF37; 
                box-shadow: 0 0 10px rgba(0,0,0,0.2);
            }

            .school-name { color: #D4AF37; font-family: 'Cinzel', serif; margin-top:10px; font-size: 1.2rem; }
            
            .nav-links { padding: 20px 10px; }
            .nav-links a {
                color: #ffffff; display: flex; align-items: center; padding: 12px 20px;
                text-decoration: none; font-size: 15px; transition: 0.3s;
                border-radius: 8px; margin-bottom: 5px;
            }
            .nav-links a i { 
                margin-right: 15px; 
                width: 25px; 
                text-align: center; 
                color: #D4AF37; 
                font-size: 18px;
            }
            .nav-links a:hover { background: rgba(212,175,55,0.15); color: #D4AF37; }
            
            .main-content { padding-top: 60px !important; }
        </style>
    </div>
    `;
    document.body.insertAdjacentHTML('afterbegin', menuHTML);
}

function handleMenuClick(e) {
    e.stopPropagation();
    const sidebar = document.getElementById('mySidebar');
    const isOpen = sidebar.classList.contains('open');
    toggleMenu(!isOpen);
}

function toggleMenu(isOpen) {
    const sidebar = document.getElementById('mySidebar');
    const overlay = document.getElementById('sidebar-overlay');
    const trigger = document.getElementById('menu-trigger');
    
    if (isOpen) {
        sidebar.classList.add('open');
        overlay.style.display = 'block';
        trigger.classList.add('change');
    } else {
        sidebar.classList.remove('open');
        overlay.style.display = 'none';
        trigger.classList.remove('change');
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadMenu);
} else {
    loadMenu();
}
