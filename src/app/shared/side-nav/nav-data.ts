export const navBarData = {
    menu: [

        {
            routerLink: 'dashboard',
            icon: '../../../assets/sidenav-icons/hr/dashboard.png',
            label: 'Dashboard',
            role: ['founder', 'Team Leader', 'HR', 'Employee'],
            clickable: false
        },
        {
            routerLink: 'permissions',
            icon: '../../../assets/sidenav-icons/hr/dashboard.png',
            label: 'Permissions',
            role: ['founder'],
            clickable: false
        },
        {
            routerLink: 'employees',
            icon: '../../../assets/sidenav-icons/hr/group-chat.png',
            label: 'Employees',
            role: ['founder', 'HR'],
            clickable: false

        },
        {
            routerLink: 'leaves',
            icon: '../../../assets/sidenav-icons/hr/report.png',
            label: 'Leaves',
            role: ['founder', 'HR'],
            clickable: false

        }, ,
        {
            routerLink: 'leave-request',
            icon: '../../../assets/sidenav-icons/hr/report.png',
            label: 'Leaves',
            role: ['Team Leader', 'Employee'],
            clickable: false

        },
        {
            routerLink: 'projects',
            icon: '../../../assets/sidenav-icons/hr/project.png',
            label: 'Projects',
            role: ['Team Leader', 'founder', 'HR', 'Employee'],
            clickable: false


        },
        {
            routerLink: 'department',
            icon: '../../../assets/sidenav-icons/founder/hiring.png',
            label: 'Department',
            role: ['founder'],
            clickable: false


        }, {
            routerLink: 'salary',
            icon: '../../../assets/sidenav-icons/founder/salary.png',
            label: 'Salary',
            role: ['founder'],
            clickable: false


        },
        {
            routerLink: 'pay-roll',
            icon: '../../../assets/sidenav-icons/hr/money.png',
            label: 'PayRoll',
            role: ['HR'],
            clickable: false

        },
        {
            routerLink: 'announcements',
            icon: '../../../assets/sidenav-icons/hr/megaphone.png',
            label: 'Announcements',
            role: ['Team Leader', 'founder', 'HR', 'Employee'],
            clickable: false

        },
        {
            routerLink: 'task',
            icon: '../../../assets/sidenav-icons/to-do-list.png',
            label: 'Tasks',
            role: ['Team Leader', 'Employee'],
            clickable: false

        },
        {
            routerLink: 'Team',
            icon: '../../../assets/sidenav-icons/hr/group-chat.png',
            label: 'Team',
            role: ['Team Leader', 'Employee'],
            clickable: false

        },
        {
            routerLink: 'pay-slip',
            icon: '../../../assets/sidenav-icons/payslip.png',
            label: 'PaySlip',
            role: ['Team Leader', 'Employee'],
            clickable: false
        },
        {
            routerLink: '/login',
            icon: '../../../assets/sidenav-icons/logout copy.png',
            label: 'Logout',
            role: ['HR', 'founder', 'Team Leader', 'Employee'],
            clickable: true

        }
    ]
}