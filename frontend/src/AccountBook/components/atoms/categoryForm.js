import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

export default function CategoryForm({ id, classes, value, categories, setCategory }) {
  if (categories.loading) {
    return <React.Fragment />;
  }
  return (
    <div>
      <FormControl className={classes.categoryForm}>
        <InputLabel htmlFor="category-select">カテゴリ</InputLabel>
        <Select id={id} onChange={(e) => setCategory(e.target.value)} value={value}>
          <MenuItem value={''}>{''}</MenuItem>
          {categories.items.map((category) => (
            <MenuItem key={category.id} value={category.id}>
              {category.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
