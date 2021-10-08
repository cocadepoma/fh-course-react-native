import { MenuItem } from '../interfaces/appInterfaces';

const menuItems: MenuItem[] = [
    {
        name: 'Animation 101',
        icon: 'cube-outline',
        component: 'Animation101Screen'
    },
    {
        name: 'Animation 102',
        icon: 'albums-outline',
        component: 'Animation102Screen'
    },
    {
        name: 'Switch',
        icon: 'toggle-outline',
        component: 'SwitchScreen'
    },
    {
        name: 'Alert',
        icon: 'alert-circle-outline',
        component: 'AlertScreen'
    },
    {
        name: 'Text',
        icon: 'document-text-outline',
        component: 'TextInputScreen'
    },
];

export default menuItems;