import { createBrowserRouter, createHashRouter } from 'react-router-dom';

// project import
import MainRoutes from './MainRoutes';

// ==============================|| ROUTING RENDER ||============================== //

const router = createHashRouter([MainRoutes], { basename: import.meta.env.VITE_APP_BASE_NAME });

export default router;
