package com.gustavoerivero.FlameBankBackendProject.controllers;

import com.gustavoerivero.FlameBankBackendProject.models.Voucher;
import com.gustavoerivero.FlameBankBackendProject.services.AccountService;
import com.gustavoerivero.FlameBankBackendProject.services.RequestService;
import com.gustavoerivero.FlameBankBackendProject.services.VoucherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/voucher")
@CrossOrigin
public class VoucherController {

    @Autowired
    private VoucherService voucherService;

    @Autowired
    private RequestService requestService;

    @Autowired
    private AccountService accountService;

    @PostMapping("/create/{requestId}")
    public String create(@PathVariable int requestId, @RequestBody Voucher voucher) {
        voucher.setRequest(requestService.getRequestById(requestId));
        voucherService.saveVoucher(voucher);
        return "New voucher is added.";
    }

    @PostMapping("/create/number/{number}")
    public String createByAccount(@PathVariable long number, @RequestBody Voucher voucher) {
        voucher.setRequest(requestService.getRequestByAccount(accountService.getAccountByNumber(number)));
        voucherService.saveVoucher(voucher);
        return "New voucher is added.";
    }

    @GetMapping("/get")
    public List<Voucher> readAll() {
        return voucherService.getAllVoucher();
    }

    @GetMapping("/get/{id}")
    public Voucher readById(@PathVariable int id) {
        return voucherService.getVoucherById(id);
    }

    @GetMapping("/get/account/{number}")
    public Voucher readByRequest(@PathVariable long number) {
        return voucherService.getVoucherByRequest(requestService.getRequestByAccount(accountService.getAccountByNumber(number)));
    }

    @PutMapping("/update/{requestId}")
    public String update(@PathVariable int requestId, @RequestBody Voucher voucher) {
        voucher.setId(voucherService.getVoucherByRequest(requestService.getRequestById(requestId)).getId());
        voucher.setRequest(requestService.getRequestById(requestId));
        return voucherService.updateVoucher(voucher);
    }

    @DeleteMapping("/delete/{id}")
    public String delete(@PathVariable int id) {
        return voucherService.deleteVoucher(id);
    }

}
