import FinancialsView from './views/FinancialsView.vue';
import AccrualView from './views/Financials/AccrualView.vue'
import CashNetIncomeView from './views/Financials/CashNetIncomeView.vue'
import FormularyView from './views/FormularyView.vue'
import RosterView from './views/RosterView.vue'
import InvoiceView from './views/Billing/InvoiceView.vue'
import StatementsView from './views/Billing/StatementsView.vue'
import ResourcesView from './views/ResourcesView.vue'
import ManageUsersView from './views/ManageUsersView.vue'
import ManageSitesView from './views/ManageSites/ManageSitesView.vue'
import ManageSitePermissionsView from './views/ManageSites/ManageSitesPermissionsView.vue'
import GenerateReportView from './views/FinancialReporting/GenerateReportView.vue'

export default[
    {path:'/',component:FinancialsView},
    {path:'/accrual-net-income',component:AccrualView},
    {path:'/cash-net-income',component:CashNetIncomeView},
    {path:'/formulary',component:FormularyView},
    {path:'/roster',component:RosterView},
    {path:'/billing-invoice',component:InvoiceView},
    {path:'/billing-statements',component:StatementsView},
    {path:'/resources',component:ResourcesView},
    {path:'/manage-users',component:ManageUsersView},
    {path:'/site',component:ManageSitesView},
    {path:'/site-permission',component:ManageSitePermissionsView},
    {path:'/financial-reporting',component:GenerateReportView},
]