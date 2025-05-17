import faiss
import uuid
from sentence_transformers import SentenceTransformer

model = SentenceTransformer("all-MiniLM-L6-v2")
dimension = 384  # vector size for that model

# In-memory FAISS index
index = faiss.IndexFlatL2(dimension)
id_map = {}

def embed_text(text):
    vec = model.encode([text])[0]
    node_id = str(uuid.uuid4())
    index.add(vec.reshape(1, -1))
    id_map[len(id_map)] = {"id": node_id, "text": text}
    return node_id

def search_vectors(query, top_k=5):
    vec = model.encode([query])[0].reshape(1, -1)
    D, I = index.search(vec, top_k)
    results = []
    for i in I[0]:
        if i in id_map:
            results.append(id_map[i])
    return results
