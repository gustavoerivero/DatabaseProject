package com.gustavoerivero.FlameBankBackendProject.controllers;

import com.gustavoerivero.FlameBankBackendProject.models.ForeignUse;
import com.gustavoerivero.FlameBankBackendProject.models.Request;
import com.gustavoerivero.FlameBankBackendProject.services.AccountService;
import com.gustavoerivero.FlameBankBackendProject.services.ForeignUseService;
import com.gustavoerivero.FlameBankBackendProject.services.RequestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/foreignUse")
@CrossOrigin
public class ForeignUseController {

    @Autowired
    private ForeignUseService foreignUseService;

    @Autowired
    private RequestService requestService;

    @Autowired
    private AccountService accountService;

    @PostMapping("/create/{requestId}")
    public String create(@PathVariable int requestId, @RequestBody ForeignUse foreignUse) {
        foreignUse.setRequest(requestService.getRequestById(requestId));
        foreignUseService.saveForeignUse(foreignUse);
        return "New foreignUse is added.";
    }

    @PostMapping("/create/number/{number}")
    public String createByAccount(@PathVariable long number, @RequestBody ForeignUse foreignUse) {
        foreignUse.setRequest(requestService.getRequestByAccount(accountService.getAccountByNumber(number)));
        foreignUseService.saveForeignUse(foreignUse);
        return "New foreignUse is added.";
    }

    @GetMapping("/get")
    public List<ForeignUse> readAll() {
        return foreignUseService.getAllForeignUses();
    }

    @GetMapping("/get/{id}")
    public ForeignUse readById(@PathVariable int id) {
        return foreignUseService.getForeignUseById(id);
    }

    @GetMapping("/get/account/{number}")
    public ForeignUse readByRequest(@PathVariable long number) {
        return foreignUseService.getForeignUseByRequest(requestService.getRequestByAccount(accountService.getAccountByNumber(number)));
    }

    @PutMapping("/update/{requestId}")
    public String update(@PathVariable int requestId, @RequestBody ForeignUse foreignUse) {
        foreignUse.setId(foreignUseService.getForeignUseByRequest(requestService.getRequestById(requestId)).getId());
        foreignUse.setRequest(requestService.getRequestById(requestId));
        return foreignUseService.updateForeignUse(foreignUse);
    }

    @DeleteMapping("/delete/{id}")
    public String delete(@PathVariable int id) {
        return foreignUseService.deleteForeignUse(id);
    }

}
