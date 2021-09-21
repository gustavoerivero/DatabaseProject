package com.gustavoerivero.FlameBankBackendProject.services;

import com.gustavoerivero.FlameBankBackendProject.models.*;
import com.gustavoerivero.FlameBankBackendProject.repositories.VoucherRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class VoucherServiceImplementation implements VoucherService {

    @Autowired
    VoucherRepository voucherRepository;

    @Override
    public Voucher saveVoucher(Voucher voucher) {
        if (voucher != null)
            return voucherRepository.save(voucher);
        return new Voucher();
    }

    @Override
    public List<Voucher> getAllVoucher() {
        return voucherRepository.findAll();
    }

    @Override
    public Voucher getVoucherById(int id) {
        Optional<Voucher> voucher = voucherRepository.findById(id);
        return voucher.orElse(null);
    }

    @Override
    public Voucher getVoucherByRequest(Request request) {
        return voucherRepository.findVoucherByRequest(request);
    }

    @Override
    public String updateVoucher(Voucher voucher) {
        Optional<Voucher> voucherOptional = voucherRepository.findById(voucher.getId());
        if (voucherOptional.isPresent()) {
            Voucher updateVoucher = voucherOptional.get();
            updateVoucher.setRequest(voucher.getRequest());
            updateVoucher.setVoucherNumber(voucher.getVoucherNumber());
            updateVoucher.setDate(voucher.getDate());
            updateVoucher.setStatus(voucher.getStatus());
            voucherRepository.save(updateVoucher);
            return "Success: Is voucher request by id: " + voucher.getId();
        }
        return "Error: Voucher has not been updated.";
    }

    @Override
    public String deleteVoucher(int id) {
        if (voucherRepository.findById(id).isPresent()) {
            voucherRepository.deleteById(id);
            return "Is voucher request by id: " + id;
        }
        return "Error: Voucher does not exists.";
    }
}