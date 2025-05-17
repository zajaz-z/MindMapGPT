from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from .vector_store import embed_text, search_vectors

router = APIRouter()

class EmbedRequest(BaseModel):
    text: str

@router.post("/embed")
def embed_and_store(req: EmbedRequest):
    try:
        node_id = embed_text(req.text)
        return {"message": "Embedding stored", "id": node_id}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.post("/search")
def search(req: EmbedRequest):
    try:
        results = search_vectors(req.text)
        return {"results": results}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
