
const menuItems = () => {
    const data = [
        {
            id:0,
            title: 'Financials',
            path:'#/',
            icon: 'fa-solid fa-money-check-dollar',
            hasChildren: true,
            toggled:false,
            children: [
                {
                    subtitle: 'Calculation of Equity',
                    icon:'fa-solid fa-money-check-dollar',
                    path:'#/'
                },
                {
                    subtitle: 'Accrual Net Income',
                    icon:'fa-solid fa-layer-group',
                    path:'#/accrual-net-income'
                },
                {
                    subtitle: 'Cash Net Income',
                    icon:'fa-solid fa-layer-group',
                    path:'#/cash-net-income'
                },
            ]
        },
        {
            id:1,
            title:'Formulary',
            path:'#/formulary',
            icon:'fa-solid fa-layer-group',
            hasChildren:false
        },
        {
            id:2,
            title:'Roster',
            path:'#/roster',
            icon:'fa-solid fa-user',
            hasChildren:false
        },
        {
            id:3,
            title:'Billing',
            path:'#/billing-invoice',
            icon:'fa-solid fa-dollar-sign',
            hasChildren:true,
            toggled:false,
            children:[
                {
                    subtitle: 'Invoice',
                    icon:'fa-solid fa-dollar-sign',
                    path:'#/billing-invoice'
                },
                {
                    subtitle: 'Statements',
                    icon:'fa-solid fa-file-invoice',
                    path:'#/billing-statements'
                },
            ]
        },
        {
            id:4,
            title:'Resources',
            path:'#/resources',
            icon:'fa-solid fa-book-open',
            hasChildren:false
        },
        {
            id:5,
            title:'Manage Users',
            path:'#/manage-users',
            icon:'fa-solid fa-users-gear',
            hasChildren:false
        },
        {
            id:6,
            title:'Manage Sites',
            path:'#/site',
            icon:'fa-solid fa-location-arrow',
            hasChildren:true,
            toggled:false,
            children:[
                {
                    subtitle: 'Site',
                    icon:'fa-solid fa-location-arrow',
                    path:'#/site'
                },
                {
                    subtitle: 'Site Permission',
                    icon:'fa-solid fa-location-arrow',
                    path:'#/site-permission'
                }
            ]
        },
        {
            id:7,
            title:'Financial Reporting',
            path:'#/financial-reporting',
            icon:'fa-solid fa-file-invoice',
            hasChildren:false
        },
        {
            id:8,
            title:'Logout',
            path:'#/',
            icon:'fa-solid fa-arrow-right-from-bracket',
            hasChildren:false
        },
    ];
    return data;
}
export default menuItems;