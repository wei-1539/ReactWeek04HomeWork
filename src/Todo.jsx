import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faTrashCan, faPencil, faXmark, faCheck } from '@fortawesome/free-solid-svg-icons'
import './style.scss'
import { useEffect, useState } from 'react'

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
    const [edit, setEdit] = useState('')
    const [target, setTarget] = useState('')
    const [change, setChange] = useState('all')

    // 新增待辦
    function addItem() {
        if (text === '') {
            alert('請輸入內容')
            return
        }
        setList([
            ...list, {
                id: new Date().getTime(),
                text,
            }
        ])
        setText('')
    }
    // 移除待辦
    function deleteItem(id) {
        setList(list.filter((item) => id !== item.id))
    }
    // 修改待辦
    function editItem(id) {
        const changeList = list.map(item => item.id === id && edit !== '' ? { ...list, text: edit } : item)
        setList(changeList)
        setEdit('')
        setTarget('')
    }
    // 完成代辦
    function finalItem(id) {
        const newList = list.map(item => item.id === id ? { ...item, completed: !item.completed } : item)
        // console.log(newList,"newList")
        setList(newList)
        // console.log(list)
    }
    // 計算已完成項目
    function finalNum() {
        const finish = list.filter(item => item.completed === true ? item : 0)
        // console.log(finish)
        return finish.length
    }
    // 刪除已完成選項
    function deleteFinalItem() {
        const finalItem = list.filter(item => item.completed !== true)
        // console.log(finalItem)
        setList(finalItem)
    }

    // 切換頁面
    const changList = list.filter(item => {
        if(change === 'finish'){
            return item.completed !==false
        }else if(change === 'stay'){
            return item.completed === false
        }else {
            return item
        }
    })
        


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
                            <li><a href="#" className={change === "all" ? "active" : ""} onClick={(e) => { e.preventDefault(); setChange('all');  }}>全部</a></li>
                            <li><a href="#" className={change === "stay" ? "active" : ""} onClick={(e) => { e.preventDefault(); setChange('stay');  }}>待完成</a></li>
                            <li><a href="#" className={change === "finish" ? "active" : ""} onClick={(e) => { e.preventDefault(); setChange('finish');  }}>已完成</a></li>
                        </ul>
                        <div className="todoList_items">
                            <ul className="todoList_item">
                            {list.length===0?(<>
                                <li>
                                    <label className="todoList_label">
                                        目前尚無待辦事項
                                    </label>
                                    </li>
                                </>):
                                (<>
                                {changList.map((item) => {
                                    return (
                                        <li key={item.id}>
                                            {target === item.id ?
                                                <>
                                                    <label className="todoList_label">
                                                        <input className="todoList_input" type="checkbox" />
                                                        <input className="editInput" type="text" name="" id="editInput" value={edit || item.text} onChange={(e) => {

                                                            setEdit(e.target.value)
                                                        }} />
                                                        {/* <span>{item.text}</span> */}
                                                    </label>
                                                    <a href="#" className="icon" onClick={(e) => {
                                                        e.preventDefault();
                                                        editItem(item.id)
                                                    }}>
                                                        <FontAwesomeIcon icon={faCheck} />
                                                    </a>
                                                    <a href="#" className="icon" onClick={(e) => {
                                                        e.preventDefault();
                                                        setTarget('')
                                                    }}>
                                                        <FontAwesomeIcon icon={faXmark} />
                                                    </a>
                                                </>
                                                :
                                                <>
                                                    <label className="todoList_label">
                                                        <input className="todoList_input" type="checkbox" id="todoList_input" value={item.completed} onClick={() => {
                                                            finalItem(item.id)
                                                        }} />
                                                        <span>{item.text}</span>
                                                    </label>
                                                    <a href="#" className="icon" onClick={(e) => {
                                                        e.preventDefault();
                                                        setTarget(item.id)
                                                    }}>
                                                        <FontAwesomeIcon icon={faPencil} />
                                                    </a>
                                                    <a href="#" className="icon" onClick={(e) => {
                                                        e.preventDefault();
                                                        deleteItem(item.id)
                                                    }}>
                                                        <FontAwesomeIcon icon={faTrashCan} />
                                                    </a>
                                                </>
                                            }


                                        </li>
                                    )
                                })}
                                </>)}
                                

                            </ul>
                            <div className="todoList_statistics">
                                <p> {finalNum()} 個已完成項目</p>
                                <a href="#" onClick={(e) => {
                                    e.preventDefault()
                                    deleteFinalItem()
                                }}>清除已完成項目</a>
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