import React, { useState, useEffect } from 'react'

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --bg: #080810;
    --surface: rgba(255,255,255,0.04);
    --surface-hover: rgba(255,255,255,0.07);
    --border: rgba(255,255,255,0.08);
    --border-bright: rgba(255,255,255,0.15);
    --accent: #c8f542;
    --accent-dim: rgba(200,245,66,0.15);
    --accent-glow: rgba(200,245,66,0.4);
    --text-primary: #f0f0f0;
    --text-secondary: rgba(240,240,240,0.45);
    --text-muted: rgba(240,240,240,0.25);
    --danger: #ff4d6d;
    --danger-dim: rgba(255,77,109,0.12);
    --radius: 16px;
    --radius-sm: 10px;
  }

  body {
    background: var(--bg);
    font-family: 'DM Sans', sans-serif;
    min-height: 100vh;
    color: var(--text-primary);
    overflow-x: hidden;
  }

  .app-wrapper {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 60px 24px 100px;
    position: relative;
  }

  /* Background orbs */
  .orb {
    position: fixed;
    border-radius: 50%;
    filter: blur(120px);
    pointer-events: none;
    z-index: 0;
  }
  .orb-1 {
    width: 600px; height: 600px;
    background: radial-gradient(circle, rgba(200,245,66,0.07) 0%, transparent 70%);
    top: -200px; right: -150px;
  }
  .orb-2 {
    width: 500px; height: 500px;
    background: radial-gradient(circle, rgba(100,80,255,0.08) 0%, transparent 70%);
    bottom: -100px; left: -150px;
  }

  .container {
    width: 100%;
    max-width: 620px;
    position: relative;
    z-index: 1;
  }

  /* Header */
  .header {
    margin-bottom: 48px;
    animation: fadeDown 0.6s ease both;
  }
  .header-eyebrow {
    font-family: 'Syne', sans-serif;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--accent);
    margin-bottom: 12px;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .header-eyebrow::before {
    content: '';
    display: inline-block;
    width: 24px; height: 1px;
    background: var(--accent);
  }
  .header h1 {
    font-family: 'Syne', sans-serif;
    font-size: clamp(36px, 6vw, 52px);
    font-weight: 800;
    line-height: 1.05;
    letter-spacing: -0.03em;
    color: var(--text-primary);
  }
  .header h1 span {
    color: var(--accent);
  }
  .header-sub {
    margin-top: 10px;
    font-size: 14px;
    color: var(--text-secondary);
    font-weight: 300;
  }

  /* Stats bar */
  .stats-bar {
    display: flex;
    gap: 12px;
    margin-bottom: 32px;
    animation: fadeUp 0.6s 0.1s ease both;
  }
  .stat-pill {
    padding: 6px 14px;
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 100px;
    font-size: 12px;
    color: var(--text-secondary);
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 6px;
    transition: all 0.2s;
  }
  .stat-pill .dot {
    width: 6px; height: 6px;
    border-radius: 50%;
    background: var(--accent);
    box-shadow: 0 0 6px var(--accent-glow);
  }

  /* Form */
  .form-card {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    padding: 28px;
    margin-bottom: 32px;
    backdrop-filter: blur(20px);
    animation: fadeUp 0.6s 0.2s ease both;
    transition: border-color 0.3s;
  }
  .form-card:focus-within {
    border-color: var(--border-bright);
  }
  .form-label {
    display: block;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--text-muted);
    margin-bottom: 8px;
    font-family: 'Syne', sans-serif;
  }
  .form-input {
    width: 100%;
    background: rgba(255,255,255,0.03);
    border: 1px solid var(--border);
    border-radius: var(--radius-sm);
    padding: 13px 16px;
    font-family: 'DM Sans', sans-serif;
    font-size: 15px;
    color: var(--text-primary);
    outline: none;
    transition: all 0.2s;
    margin-bottom: 16px;
  }
  .form-input::placeholder { color: var(--text-muted); }
  .form-input:focus {
    border-color: var(--accent);
    background: rgba(200,245,66,0.03);
    box-shadow: 0 0 0 3px var(--accent-dim);
  }
  .form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
  }
  @media (max-width: 480px) { .form-row { grid-template-columns: 1fr; } }

  .btn-submit {
    width: 100%;
    padding: 14px 24px;
    background: var(--accent);
    color: #080810;
    border: none;
    border-radius: var(--radius-sm);
    font-family: 'Syne', sans-serif;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 0.05em;
    cursor: pointer;
    transition: all 0.2s;
    margin-top: 4px;
    position: relative;
    overflow: hidden;
  }
  .btn-submit::after {
    content: '';
    position: absolute;
    inset: 0;
    background: white;
    opacity: 0;
    transition: opacity 0.2s;
  }
  .btn-submit:hover { transform: translateY(-1px); box-shadow: 0 8px 30px var(--accent-glow); }
  .btn-submit:hover::after { opacity: 0.08; }
  .btn-submit:active { transform: translateY(0); }

  /* Todo list */
  .list-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;
    animation: fadeUp 0.6s 0.3s ease both;
  }
  .list-title {
    font-family: 'Syne', sans-serif;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--text-muted);
  }
  .list-count {
    font-size: 12px;
    color: var(--text-muted);
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 100px;
    padding: 3px 10px;
  }

  /* Todo item */
  .todo-item {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    padding: 20px 22px;
    margin-bottom: 10px;
    display: flex;
    align-items: flex-start;
    gap: 16px;
    transition: all 0.25s;
    animation: slideIn 0.35s ease both;
    position: relative;
    overflow: hidden;
  }
  .todo-item::before {
    content: '';
    position: absolute;
    left: 0; top: 0; bottom: 0;
    width: 3px;
    background: var(--accent);
    opacity: 0;
    transition: opacity 0.2s;
    border-radius: 0 2px 2px 0;
  }
  .todo-item:hover {
    border-color: var(--border-bright);
    background: var(--surface-hover);
    transform: translateX(3px);
  }
  .todo-item:hover::before { opacity: 1; }

  .todo-index {
    font-family: 'Syne', sans-serif;
    font-size: 11px;
    font-weight: 700;
    color: var(--text-muted);
    min-width: 24px;
    padding-top: 2px;
    letter-spacing: 0.05em;
  }

  .todo-content { flex: 1; min-width: 0; }
  .todo-title {
    font-family: 'Syne', sans-serif;
    font-size: 16px;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 5px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .todo-desc {
    font-size: 13px;
    color: var(--text-secondary);
    font-weight: 300;
    line-height: 1.5;
  }

  .todo-actions {
    display: flex;
    gap: 8px;
    flex-shrink: 0;
    opacity: 0;
    transform: translateX(8px);
    transition: all 0.2s;
  }
  .todo-item:hover .todo-actions {
    opacity: 1;
    transform: translateX(0);
  }

  .btn-icon {
    width: 34px; height: 34px;
    border-radius: 8px;
    border: 1px solid var(--border);
    background: transparent;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s;
    color: var(--text-secondary);
    font-size: 14px;
  }
  .btn-icon:hover { transform: scale(1.1); }
  .btn-edit:hover {
    background: var(--accent-dim);
    border-color: var(--accent);
    color: var(--accent);
  }
  .btn-delete:hover {
    background: var(--danger-dim);
    border-color: var(--danger);
    color: var(--danger);
  }

  /* Empty state */
  .empty-state {
    text-align: center;
    padding: 64px 24px;
    animation: fadeUp 0.5s ease both;
  }
  .empty-icon {
    font-size: 40px;
    margin-bottom: 16px;
    opacity: 0.3;
    filter: grayscale(1);
  }
  .empty-title {
    font-family: 'Syne', sans-serif;
    font-size: 18px;
    font-weight: 700;
    color: var(--text-muted);
    margin-bottom: 8px;
  }
  .empty-sub {
    font-size: 13px;
    color: var(--text-muted);
    font-weight: 300;
  }

  /* Edit modal */
  .modal-overlay {
    position: fixed;
    inset: 0;
    background: rgba(8,8,16,0.85);
    backdrop-filter: blur(12px);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 100;
    padding: 24px;
    animation: fadeIn 0.2s ease;
  }
  .modal {
    background: #0e0e1a;
    border: 1px solid var(--border-bright);
    border-radius: 20px;
    padding: 32px;
    width: 100%;
    max-width: 440px;
    animation: modalIn 0.3s cubic-bezier(0.34,1.56,0.64,1) both;
    box-shadow: 0 40px 100px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.05);
  }
  .modal-title {
    font-family: 'Syne', sans-serif;
    font-size: 20px;
    font-weight: 800;
    margin-bottom: 24px;
    color: var(--text-primary);
    letter-spacing: -0.02em;
  }
  .modal-title span { color: var(--accent); }
  .modal-actions {
    display: flex;
    gap: 10px;
    margin-top: 20px;
  }
  .btn-cancel {
    flex: 1;
    padding: 13px;
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius-sm);
    color: var(--text-secondary);
    font-family: 'Syne', sans-serif;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s;
  }
  .btn-cancel:hover { border-color: var(--border-bright); color: var(--text-primary); }
  .btn-save {
    flex: 1;
    padding: 13px;
    background: var(--accent);
    border: none;
    border-radius: var(--radius-sm);
    color: #080810;
    font-family: 'Syne', sans-serif;
    font-size: 14px;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.2s;
  }
  .btn-save:hover { box-shadow: 0 6px 24px var(--accent-glow); transform: translateY(-1px); }

  /* Animations */
  @keyframes fadeDown { from { opacity:0; transform:translateY(-20px); } to { opacity:1; transform:translateY(0); } }
  @keyframes fadeUp { from { opacity:0; transform:translateY(16px); } to { opacity:1; transform:translateY(0); } }
  @keyframes fadeIn { from { opacity:0; } to { opacity:1; } }
  @keyframes slideIn { from { opacity:0; transform:translateX(-12px); } to { opacity:1; transform:translateX(0); } }
  @keyframes modalIn { from { opacity:0; transform:scale(0.92) translateY(16px); } to { opacity:1; transform:scale(1) translateY(0); } }
`

export default function App() {
  const [todos, setTodos] = useState([])
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const [editModal, setEditModal] = useState(null)
  const [editTitle, setEditTitle] = useState('')
  const [editDesc, setEditDesc] = useState('')

  const addTodo = (e) => {
    e.preventDefault()
    if (!title.trim()) return
    setTodos([...todos, { title, desc, id: Date.now() }])
    setTitle('')
    setDesc('')
  }

  const openEdit = (index) => {
    setEditModal(index)
    setEditTitle(todos[index].title)
    setEditDesc(todos[index].desc)
  }

  const saveEdit = () => {
    const updated = [...todos]
    updated[editModal] = { ...updated[editModal], title: editTitle, desc: editDesc }
    setTodos(updated)
    setEditModal(null)
  }

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index))
  }

  const completed = todos.length

  return (
    <>
      <style>{styles}</style>

     
      {editModal !== null && (
        <div className="modal-overlay" onClick={() => setEditModal(null)}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <div className="modal-title">Edit <span>Task</span></div>
            <label className="form-label">Title</label>
            <input
              className="form-input"
              value={editTitle}
              onChange={e => setEditTitle(e.target.value)}
              placeholder="Task title..."
              autoFocus
            />
            <label className="form-label">Description</label>
            <input
              className="form-input"
              value={editDesc}
              onChange={e => setEditDesc(e.target.value)}
              placeholder="Task description..."
            />
            <div className="modal-actions">
              <button className="btn-cancel" onClick={() => setEditModal(null)}>Cancel</button>
              <button className="btn-save" onClick={saveEdit}>Save Changes</button>
            </div>
          </div>
        </div>
      )}

      <div className="app-wrapper">
        <div className="orb orb-1" />
        <div className="orb orb-2" />

        <div className="container">
          {/* Header */}
          <div className="header">
            <div className="header-eyebrow">Task Manager</div>
            <h1>Your <span>Focus</span><br />Board</h1>
            <p className="header-sub">Clarity through organized intention.</p>
          </div>

          {/* Stats */}
          <div className="stats-bar">
            <div className="stat-pill">
              <span className="dot" />
              {completed} task{completed !== 1 ? 's' : ''} total
            </div>
          </div>

          {/* Form */}
          <div className="form-card">
            <form onSubmit={addTodo}>
              <div className="form-row">
                <div>
                  <label className="form-label">Title</label>
                  <input
                    className="form-input"
                    type="text"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    placeholder="Task title..."
                  />
                </div>
                <div>
                  <label className="form-label">Description</label>
                  <input
                    className="form-input"
                    type="text"
                    value={desc}
                    onChange={e => setDesc(e.target.value)}
                    placeholder="Short description..."
                  />
                </div>
              </div>
              <button className="btn-submit" type="submit">
                + Add Task
              </button>
            </form>
          </div>

          {/* List */}
          <div className="list-header">
            <span className="list-title">Tasks</span>
            <span className="list-count">{todos.length}</span>
          </div>

          {todos.length === 0 ? (
            <div className="empty-state">
              <div className="empty-icon">◎</div>
              <div className="empty-title">Nothing here yet</div>
              <div className="empty-sub">Add your first task above to get started</div>
            </div>
          ) : (
            todos.map((item, index) => (
              <div className="todo-item" key={item.id}>
                <span className="todo-index">{String(index + 1).padStart(2, '0')}</span>
                <div className="todo-content">
                  <div className="todo-title">{item.title}</div>
                  {item.desc && <div className="todo-desc">{item.desc}</div>}
                </div>
                <div className="todo-actions">
                  <button className="btn-icon btn-edit" onClick={() => openEdit(index)} title="Edit">
                    ✎
                  </button>
                  <button className="btn-icon btn-delete" onClick={() => deleteTodo(index)} title="Delete">
                    ✕
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  )
}