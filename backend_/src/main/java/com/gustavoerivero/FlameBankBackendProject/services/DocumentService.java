package com.gustavoerivero.FlameBankBackendProject.services;

import com.gustavoerivero.FlameBankBackendProject.models.Document;

import java.util.List;

public interface DocumentService {

    public Document saveDocument(Document document);
    public List<Document> getAllDocuments();
    public Document getDocumentById(int id);
    public Document getDocumentByNumber(long number);
    public String updateDocument(Document document);
    public String deleteDocument(int id);

}
