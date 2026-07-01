import React, { useState } from 'react'
import { EditFilled } from '@ant-design/icons'
import { DeleteFilled } from '@ant-design/icons'
import { Modal, Input } from 'antd'

const TodoItems = ({ text, id, deleteTodo, editTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(text);


  const saveEdit = () => {
    const trimmed = editText.trim();
    if (trimmed === "") {
      setEditText(text);
    } else {
      editTodo(id, trimmed);
    }
    setIsEditing(false);
  };

  const openEditModal = () => {
    setEditText(text);
    setIsEditing(true);
  };
  return (
    <div className="flex items-center my-1 ">
      <div className="flex flex-1 items-center cursor-pointer h-12 border-0 outline outline-1 outline-gray-400 rounded-xl ">
        <p className="text-slate-700 ml-4 text-[20px] decoration-slate-500 flex-1">
            {text}
          </p>

          <Modal
            title="Edit Task"
            open={isEditing}
            onOk={saveEdit}
            okType="primary"
            okText="Update"
            onCancel={() => setIsEditing(false)}
          >
            <Input
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
            />
          </Modal>

        <EditFilled onClick={() => openEditModal(id, text)}
          className="text-slate-500 cursor-pointer text-xl mr-3 hover:scale-125" />

        <DeleteFilled onClick={() => { deleteTodo(id) }} className=" cursor-pointer text-xl text-slate-500 hover:scale-125 mr-2" />

      </div>


    </div>
  )
}

export default TodoItems
