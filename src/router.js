import FinancialsView from './views/FinancialsView.vue';
import AccrualView from './views/Financials/AccrualView.vue'
import CashNetIncomeView from './views/Financials/CashNetIncomeView.vue'

export default[
    {path:'/',component:FinancialsView},
    {path:'/accrual-net-income',component:AccrualView},
    {path:'/cash-net-income',component:CashNetIncomeView},
]