package com.gustavoerivero.FlameBankBackendProject.services;

import com.gustavoerivero.FlameBankBackendProject.models.Document;
import com.gustavoerivero.FlameBankBackendProject.repositories.DocumentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DocumentServiceImplementation implements DocumentService {

    @Autowired
    DocumentRepository documentRepository;

    @Override
    public Document saveDocument(Document document) {
        if (document != null)
            return documentRepository.save(document);
        return new Document();
    }

    @Override
    public List<Document> getAllDocuments() {
        return documentRepository.findAll();
    }

    @Override
    public Document getDocumentById(int id) {
        Optional<Document> document = documentRepository.findById(id);
        return document.orElse(null);
    }

    @Override
    public Document getDocumentByNumber(long number) {
        return documentRepository.findByNumber(number);
    }

    @Override
    public String updateDocument(Document document) {
        Optional<Document> documentOptional = documentRepository.findById(document.getId());
        if (documentOptional.isPresent()) {
            Document updatedDocument = documentOptional.get();
            updatedDocument.setType(document.getType());
            updatedDocument.setNumber(document.getNumber());
            updatedDocument.setStatus(document.getStatus());
            documentRepository.save(updatedDocument);
            return "Success: Is updated document by id: " + document.getId();
        }
        return "Error: Document has not been updated.";
    }

    @Override
    public String deleteDocument(int id) {
        if (documentRepository.findById(id).isPresent()) {
            documentRepository.deleteById(id);
            return "Is deleted document by id: " + id;
        }
        return "Error: Document does not exists.";
    }
}
