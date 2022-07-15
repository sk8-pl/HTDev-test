import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import {
  Link,
  matchPath,
  useLocation,
} from 'react-router-dom';

const useRouteMatch = (patterns: readonly string[]) => {
  const { pathname } = useLocation();

  for (let i = 0; i < patterns.length; i += 1) {
    const pattern = patterns[i];
    const possibleMatch = matchPath(pattern, pathname);
    if (possibleMatch !== null) {
      return possibleMatch;
    }
  }

  return null;
}

const MyTabs = () => {
  const routeMatch = useRouteMatch(['/create-task', '/']);
  const currentTab = routeMatch?.pattern?.path;

  return (
    <Tabs value={currentTab}>
      <Tab label="Создать запись" value="/create-task" to="/create-task" component={Link} />
      <Tab label="Записи" value="/" to="/" component={Link} />
    </Tabs>
  );
}

const TabsRouter = () => {
  return (
      <Box sx={{ width: '100%' }}>
        <MyTabs />
      </Box>
  );
}

export default TabsRouter;
