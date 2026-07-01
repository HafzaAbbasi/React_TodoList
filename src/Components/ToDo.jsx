import React, { useEffect, useState } from 'react'
import TodoItems from './TodoItems'
import { ScheduleOutlined } from '@ant-design/icons'
import { Modal } from 'antd'

const ToDo = () => {
    const [todoList, setTodoList] = useState(localStorage.getItem("todoList") ?
        JSON.parse(localStorage.getItem("todoList")) : []);

    const [inputText, setInputText] = useState("");

    const add = () => {
        const input = inputText.trim();

        if (input === "") {
            return;
        }
        const newTodo = {
            id: Date.now(),
            text: input,
        }

        setTodoList((prev) => [...prev, newTodo]);
        setInputText("");

    }

    const deleteTodo = (id) => {
        Modal.confirm({
            title:'Are you sure, you want to delete this task',
            okText:'Yes',
            okType:'danger',
            onOk:()=>{
                setTodoList((prvTodos) => {
            return prvTodos.filter((todo) => todo.id !== id)
        });
            }
        })
        
    }

    const editTodo = (id, newText) => {
        setTodoList((prevTodos) => {
            return prevTodos.map((todo) => {
                if (todo.id === id) {
                    return { ...todo, text: newText };
                }
                return todo;
            });
        });
    };



    useEffect(() => {
        localStorage.setItem("todoList", JSON.stringify(todoList));
    }, [todoList]);


    return (
        <div className="bg-white place-self-center w-full sm:max-w-md md:max-w-xl flex flex-col p-7 min-h-[85vh] rounded-xl
      shadow-lg bottom-shadow ">
                       {/* {-----------title------} */}

            <div className="flex items-center mt-4 gap-2 border-b-2 border-gray-400 pb-1">
                <ScheduleOutlined className="text-3xl pt-2 " />
                <h1 className='text-3xl font-semibold'>To-Do List</h1>
            </div>
            {/* {-----------input box------} */}

            <div className="flex items-center my-4 gap-2 rounded-1xl">
                <input type="text"
                    placeholder='Add your task...'
                    className='bg-transparent border-0 outline outline-1 outline-gray-400
                        flex-1 h-14 p-2 pr-2 placeholder:text-slate-600 
                        font-normal text-[1.5rem]
                        rounded-2xl '
                    value={inputText}

                    onChange={(e) => setInputText(e.target.value)}
                     />
                <button onClick={add} className='border-none 
                     rounded-2xl border-0 outline outline-1 outline-gray-400
               hover:bg-purple-300 bg-gray-200 w-22 h-14 text-slate-600 
                        font-normal text-[1.5rem] 
                cursor-pointer hover:text-white hover:outline-none'>Add +</button>

            </div>
            {/* {-----------todo list------} */}

            <div>
                {todoList.map((item, index) => {
                    return <TodoItems key={index} text={item.text}
                        id={item.id} deleteTodo={deleteTodo} editTodo={editTodo}/>
                })}
            </div>
           

        </div>
    )
}

export default ToDo
