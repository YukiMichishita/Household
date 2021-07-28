import React, { useState, useEffect } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import Chip from '@material-ui/core/Chip';
import { useDispatch, useSelector } from 'react-redux';
import { setCategoryValue } from '../../stores/categoryMultiValues';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: 2,
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export default function categorymultiselect() {
  const classes = usestyles();
  const subcategories = useselector((state) => state.subcategory).items;
  const selectedsubcategories = useselector((state) => state.categorymultivalues);
  const dispatch = useDispatch();

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="subcategory-multivalue-select">サブカテゴリ</InputLabel>
        <Select
          id="demo-mutiple-chip"
          multiple
          value={selectedCategories}
          onChange={(e) => dispatch(setCategoryValue(e.target.value))}
          input={<Input id="select-multiple-chip" />}
          renderValue={(selected) => (
            <div className={classes.chips}>
              {selected.map((value) => {
                name = categories.filter((category) => category.id == value)[0].name;
                return <Chip key={value} label={name} className={classes.chip} />;
              })}
            </div>
          )}
          MenuProps={MenuProps}
        >
          {categories.map((category) => (
            <MenuItem key={category.id} value={category.id}>
              <Checkbox checked={selectedCategories.indexOf(category.id) > -1} color="secondary" />
              <ListItemText primary={category.name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
