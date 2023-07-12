import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';

export default function NestedList() {
  const [clickedItem, setClickedItem] = React.useState<number>(-1);

  const handleClickedCategory = (item: number) => setClickedItem(clickedItem === item ? -1 : item)

  const categories = [
    {
      name: "Electronics",
      items: ["bulb", "copper wire", "switches"],
    },
    {
      name: "Tools",
      items: ["hammer", "screwdriver", "saw"],
    },
    {
      name: "Home",
      items: ["bed", "couch", "table"],
    },
    {
      name: "Clothing",
      items: ["shirt", "pants", "shoes"],
    },
  ];

  return (
    <List
      sx={{ width: '100%', maxWidth: 360 }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Products
        </ListSubheader>
      }
    >
      {categories.map((category, item) => (
        <>
          <ListItemButton onClick={() => handleClickedCategory(item)}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary={category.name} />
            {clickedItem === item ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={clickedItem === item} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {category.items.map((item, index) => (
                <ListItemButton sx={{ pl: 4 }} key={index}>
                  <ListItemIcon>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText primary={item} />
                </ListItemButton>
              )
              )}
            </List>
          </Collapse>
        </>
      ))}
    </List>
  );
}