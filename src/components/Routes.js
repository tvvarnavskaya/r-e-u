import { Home, ContentPaste, Notifications, AccountCircle } from '@material-ui/icons';
import WorkflowLoadGraph from 'workflow_load_graph/WorkflowLoadGraph'
// import ShowTasks from 'task_load_graph/ShowTasks';

const Routes = [
    {
        path: '/wfGraph',
        sidebarName: 'main',
        navbarName: 'main',
        icon: Home,
        component: WorkflowLoadGraph
    },
    {
        path: '/taskGraph',
        sidebarName: 'main',
        navbarName: 'main',
        icon: AccountCircle,
        component: WorkflowLoadGraph
    }
];

export default Routes;