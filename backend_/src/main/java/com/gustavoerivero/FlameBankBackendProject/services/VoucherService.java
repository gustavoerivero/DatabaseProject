package com.gustavoerivero.FlameBankBackendProject.services;

import com.gustavoerivero.FlameBankBackendProject.models.Request;
import com.gustavoerivero.FlameBankBackendProject.models.Voucher;

import java.util.List;

public interface VoucherService {

    public Voucher saveVoucher(Voucher voucher);
    public List<Voucher> getAllVoucher();
    public Voucher getVoucherById(int id);
    public Voucher getVoucherByRequest(Request request);
    public String updateVoucher(Voucher voucher);
    public String deleteVoucher(int id);

}
