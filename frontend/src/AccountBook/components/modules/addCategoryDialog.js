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
import EditIcon from '@material-ui/icons/Edit';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import CloseIcon from '@material-ui/icons/Close';
import MessagePopover from '../atoms/messagePopover';
import TabPanel from '../atoms/tabPanel';

export default function AddCategoryDialog({
  classes,
  open,
  setOpen,
  value,
  setValue,
  editing,
  setEditing,
  createCategory,
  updateCategory,
  deleteCategory,
}) {
  return (
    <>
      <Fab size="small" aria-label="add" className={classes.addCategoryIcon} onClick={() => setOpen(true)}>
        <AddIcon />
      </Fab>
      <Dialog open={open} onClose={() => setOpen(false)} fullWidth>
        <MessagePopover classes={classes} />
        <AppBar className={classes.dialogBar} position="static" color="default">
          <Tabs value={value} onChange={() => setValue(1 - value)} indicatorColor="primary">
            <Tab label="追加" className={classes.dialogLabel} />
            <Tab label="編集" className={classes.dialogLabel} />
          </Tabs>
        </AppBar>

        {/* カテゴリ追加タブ */}
        <TabPanel value={value} index={0} className={classes.tabPanel}>
          <DialogContent className={classes.editDialogContent}>
            <TextField
              margin="dense"
              id="category_name"
              label="カテゴリ名称"
              type="text"
              className={classes.categoryName}
              inputProps={{ maxLength: 12 }}
            />
          </DialogContent>
          <DialogActions className={classes.dialogAction}>
            <Button color="primary" onClick={createCategory} disabled={false}>
              保存
            </Button>
            <Button onClick={() => setOpen(false)} color="primary">
              キャンセル
            </Button>
          </DialogActions>
        </TabPanel>

        {/* カテゴリ編集・削除タブ */}
        <TabPanel value={value} index={1} className={classes.tabPanel}>
          {editing ? (
            // 編集・削除
            <DialogContent className={classes.editDialogContent}>
              <TextField
                id="dialogCategoryInput"
                className={classes.dialogCategory}
                defaultValue={document.getElementById('dialogCategory')?.textContent}
              />
              <Button color="primary" onClick={updateCategory}>
                保存
              </Button>
              <CloseIcon onClick={() => setEditing(false)} />
            </DialogContent>
          ) : (
            // 対象の選択
            <DialogContent className={classes.editDialogContent}>
              <CategoryForm id={'dialogCategory'} classes={classes} />
              <EditIcon className={classes.editIcon1} onClick={() => setEditing(true)} />
              <DeleteForeverIcon className={classes.deleteIcon1} onClick={deleteCategory} />
            </DialogContent>
          )}
          <DialogActions className={classes.dialogAction}>
            <Button onClick={() => setOpen(false)} color="primary">
              キャンセル
            </Button>
          </DialogActions>
        </TabPanel>
      </Dialog>
    </>
  );
}
