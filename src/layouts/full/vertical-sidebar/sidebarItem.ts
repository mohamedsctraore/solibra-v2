import {
    ChartLineIcon,
    UserCircleIcon,
    HomeIcon,
    Message2Icon,
    FilesIcon,
    DatabaseIcon,

} from 'vue-tabler-icons';

export interface menu {
    header?: string;
    title?: string;
    icon?: any;
    to?: string;
    chip?: string;
    chipBgColor?: string;
    chipColor?: string;
    chipVariant?: string;
    chipIcon?: string;
    children?: menu[];
    disabled?: boolean;
    type?: string;
    subCaption?: string;
}

const sidebarItem: menu[] = [
    { header: 'Tableau de Bord' },
    {
        title: 'Accueil',
        icon: HomeIcon,
        to: '/'
    },
    { header: 'Messages' },
    {
        title: 'Campagnes',
        icon: Message2Icon,
        to: '/campagnes'
    },
    {
        title: 'Categories',
        icon: FilesIcon,
        to: '/categories'
    },
    {
        title: 'Statistiques',
        icon: ChartLineIcon,
        to: '/statistiques'
    },
    { header: 'Parametrages' },
    {
        title: 'Utilisateurs',
        icon: UserCircleIcon,
        to: '/utilisateurs'
    },
    {
        title: 'Clients',
        icon: DatabaseIcon,
        to: '/clients'
    },
];

export default sidebarItem;
