MindMapGPT

MindMapGPT is a search engine that turns any given topic into dynamic, visual maps. Explore by typing it the topic get a mind map of related subtopics, summaries, and source links using AI and semantic search.

Current Features

- Generate a starter mind map from any topic
- Render connected nodes in the browser
- Select nodes to inspect summaries
- Store and search text embeddings with FAISS

Planned Features

- AI-generated subtopics and summaries
- Expand any node to go deeper
- Source links and saved research notes
- Export and share mind maps
- Persistent projects instead of in-memory data


Tech Stack:
 Area            | Tech                      
 ----------------|-------------------------
 Frontend        | React, Vite                 
 Backend         | Python, FastAPI             
 Embeddings      | sentence-transformers       
 Vector Search   | FAISS                       
 Future AI       | OpenAI API                  
 Future Graph UI | React Flow



Getting Started

Install backend dependencies:

```bash
cd backend
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
uvicorn app.main:app --reload
```

Install frontend dependencies:

```bash
cd frontend
npm install
npm run dev
```

The frontend expects the backend at `http://127.0.0.1:8000`.

