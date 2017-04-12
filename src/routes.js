import Home from './components/Home.vue'
import IndexContato from './components/contatos/IndexContato.vue'
import EditarContato from './components/contatos/EditarContato.vue'
import ListarContato from './components/contatos/ListarContato.vue'
import CadastrarContato from './components/contatos/CadastrarContato.vue'

export const routes = [
    //Routes priority is ordered by order of route definition, the sooner a
    //route is defined, the higher is your priority
    { path: '', component: IndexContato, name: 'Todos os Contatos'},
    { path: '/edit/:id', component: EditarContato, name: "EditContact"},
    { path: '/listar', component: ListarContato, name: 'Filtrar Por Data' },
    { path: '/cadastrar', component: CadastrarContato, name: 'Cadastrar Contato' },
];