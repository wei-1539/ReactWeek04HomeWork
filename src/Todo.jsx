import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faTrashCan, faPencil, faXmark, faCheck } from '@fortawesome/free-solid-svg-icons'
import './style.scss'
import { useState } from 'react'

const data = [
    { id: 1, text: '把冰箱發霉的檸檬拿去丟', completed: false },
    { id: 2, text: '打電話叫媽媽匯款給我', completed: false },
    { id: 3, text: '整理電腦資料夾', completed: false },
    { id: 4, text: '約vicky禮拜三泡溫泉', completed: false },
    { id: 5, text: '約ada禮拜四吃晚餐', completed: false },
]

function Todo() {
    const [list, setList] = useState(data);
    const [text, setText] = useState('')
    const [edit ,setEdit] = useState('')

    // 新增待辦
    function addItem() {
        if (text === '') {
            alert('請輸入內容')
            return
        }
        setList([
            ...list, {
                id: list.length + 1,
                text,
            }
        ])
        setText('')
    }
    // 移除待辦
    function deleteItem(id) {
        console.log(id)
        setList(list.filter((item) => id !== item.id))
    }
    // 修改待辦
    function editItem(){

    }
    // 完成代辦
    function finalItem(id) {
      
    //   setList(newList)
  
    }
    return (
        <>
            {/* <!-- ToDo List --> */}
            <div id="todoListPage" className="bg-half">
                <nav>
                    <h1><a href="#">ONLINE TODO LIST</a></h1>
                    <ul>
                        <li className="todo_sm"><a href="#"><span>王小明的代辦</span></a></li>
                        <li><a href="#loginPage">登出</a></li>
                    </ul>
                </nav>
                <div className="container todoListPage vhContainer">
                    <div className="todoList_Content">
                        <div className="inputBox">

                            <input type="text" placeholder="請輸入待辦事項" value={text} onChange={(e) => {
                                setText(e.target.value)
                            }} />
                            <a href="#" onClick={addItem}>
                                <FontAwesomeIcon icon={faPlus} />
                            </a>
                        </div>
                        <div className="todoList_list">
                            <ul className="todoList_tab">
                                <li><a href="#" className="active">全部</a></li>
                                <li><a href="#">待完成</a></li>
                                <li><a href="#">已完成</a></li>
                            </ul>
                            <div className="todoList_items">
                                <ul className="todoList_item">
                                    {list.map((item) => {
                                        return (
                                            <li key={item.id}>

                                                <label className="todoList_label">
                                                    <input className="todoList_input" type="checkbox"/>
                                                    <span>{item.text}</span>
                                                </label>
                                                <a href="#" className="icon">
                                                    <FontAwesomeIcon icon={faPencil} />
                                                </a>
                                                <a href="#" className="icon" onClick={() => { deleteItem(item.id) }}>
                                                    <FontAwesomeIcon icon={faTrashCan} />
                                                </a>
                                            </li>
                                        )
                                    })}


                                </ul>
                                <div className="todoList_statistics">
                                    <p> 5 個已完成項目</p>
                                    <a href="#">清除已完成項目</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Todo