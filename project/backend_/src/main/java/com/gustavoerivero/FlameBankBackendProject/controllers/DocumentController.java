package com.gustavoerivero.FlameBankBackendProject.controllers;

import com.gustavoerivero.FlameBankBackendProject.models.Document;
import com.gustavoerivero.FlameBankBackendProject.services.DocumentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/document")
@CrossOrigin
public class DocumentController {

    @Autowired
    private DocumentService documentService;

    @PostMapping("/create")
    public String create(@RequestBody Document document) {
        documentService.saveDocument(document);
        return "New document is added.";
    }

    @GetMapping("/get")
    public List<Document> readAll() {
        return documentService.getAllDocuments();
    }

    @GetMapping("/get/{id}")
    public Document readById(@PathVariable int id) {
        return documentService.getDocumentById(id);
    }

    @GetMapping("/get/number/{number}")
    public Document readByNumber(@PathVariable long number) {
        return documentService.getDocumentByNumber(number);
    }

    @PutMapping("/update/{number}")
    public String update(@PathVariable long number, @RequestBody Document document) {
        document.setId(documentService.getDocumentByNumber(number).getId());
        return documentService.updateDocument(document);
    }

    @DeleteMapping("/delete/{id}")
    public String delete(@PathVariable int id) {
        return documentService.deleteDocument(id);
    }

}
