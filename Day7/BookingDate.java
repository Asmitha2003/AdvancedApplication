package com.example.demo.entity.enumerate;

public enum BookingDate {
    CHENNAI_GOA_CHENNAI("Chennai-Goa-Chennai", "Apr 10, 2024 - Apr 18, 2024"),
    MUMBAI_GOA_MUMBAI("Mumbai-Goa-Mumbai", "Apr 20, 2024 - Apr 27, 2024"),
    COCHIN_LAKSHADWEEP_COCHIN("Cochin-Lakshadweep-Cochin", "May 1, 2024 - May 7, 2024");

    private final String label;
    private final String dateRange;

    BookingDate(String label, String dateRange) {
        this.label = label;
        this.dateRange = dateRange;
    }

    public String getLabel() {
        return label;
    }

    public String getDateRange() {
        return dateRange;
    }
}
