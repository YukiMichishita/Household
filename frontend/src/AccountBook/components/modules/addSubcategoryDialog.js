import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import CategoryForm from '../../container/atoms/categoryForm';
import SubcategoryForm from '../../container/atoms/subcategoryForm';
import EditIcon from '@material-ui/icons/Edit';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import CloseIcon from '@material-ui/icons/Close';
import MessagePopover from '../atoms/messagePopover';
import TabPanel from '../atoms/tabPanel';

export default function AddSubcategoryDialog({
  classes,
  open,
  setOpen,
  value,
  setValue,
  editing,
  setEditing,
  createSubcategory,
  updateSubcategory,
  deleteSubcategory,
}) {
  return (
    <div>
      <Fab size="small" aria-label="add" className={classes.addCategoryIcon} onClick={() => setOpen(true)}>
        <AddIcon />
      </Fab>
      <Dialog
        PaperProps={{
          style: {
            position: 'relative',
            bottom: 700,
            left: -150,
          },
        }}
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="form-dialog-title"
      >
        <MessagePopover />
        <AppBar position="static" color="default">
          <Tabs value={value} onChange={() => setValue(1 - value)} indicatorColor="primary">
            <Tab label="追加" className={classes.dialogLabel} />
            <Tab label="編集" className={classes.dialogLabel} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0} className={classes.tabPanel}>
          <DialogContent>
            <CategoryForm id={'dialogCategory'} classes={classes.dialogCategory2} />
            <TextField
              autoFocus
              margin="dense"
              id="subcategory_name"
              label="サブカテゴリ名称"
              type="text"
              className={classes.categoryName}
            />
          </DialogContent>
          <DialogActions className={classes.dialogAction}>
            <Button color="primary" onClick={createSubcategory}>
              保存
            </Button>
            <Button onClick={() => setOpen(false)} color="primary">
              キャンセル
            </Button>
          </DialogActions>
        </TabPanel>
        <TabPanel value={value} index={1} className={classes.tabPanel}>
          {editing ? (
            <DialogContent className={classes.editDialogContent}>
              <TextField
                id="dialogSubcategoryInput"
                className={classes.dialogSubcategory}
                defaultValue={document.getElementById('dialogSubcategory')?.textContent}
              />
              <Button color="primary" onClick={updateSubcategory}>
                保存
              </Button>
              <CloseIcon onClick={() => setEditing(false)} />
            </DialogContent>
          ) : (
            <DialogContent className={classes.editDialogContent}>
              <CategoryForm id={'dialogCategory'} classes={classes.dialogCategoryEdit} />
              <SubcategoryForm id={'dialogSubcategory'} classes={classes.dialogSubcategory} />
              <EditIcon className={classes.editIcon2} onClick={() => setEditing(true)} />
              <DeleteForeverIcon className={classes.deleteIcon2} onClick={deleteSubcategory} />
            </DialogContent>
          )}
          <DialogActions className={classes.dialogAction}>
            <Button onClick={() => setOpen(false)} color="primary">
              キャンセル
            </Button>
          </DialogActions>
        </TabPanel>
      </Dialog>
    </div>
  );
}
