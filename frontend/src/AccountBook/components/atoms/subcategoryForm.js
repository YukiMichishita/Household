import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

export default function SubcategoryForm({ id, classes, value, subcategories, setSubcategory }) {
  if (subcategories.loading) {
    return <React.Fragment />;
  }

  return (
    <div>
      <FormControl className={classes.subcategoryForm}>
        <InputLabel htmlFor="subcategory-select">サブカテゴリ</InputLabel>
        <Select id={id} name="subcategory" onChange={(e) => setSubcategory(e.target.value)} value={value}>
          <MenuItem value={''}>{''}</MenuItem>
          {subcategories.items.map((subcategory) => (
            <MenuItem key={subcategory.id} value={subcategory.id}>
              {subcategory.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
