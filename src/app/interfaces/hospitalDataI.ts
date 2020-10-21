export interface HospitalDataResponseI {
    at_least_one_measure: string;
    immunization_measure: string;
    period: string;
    region: string;
    region_code: string;
    registry_measure: string;
    reportable_lab_results_measure: string;
    stage_1_hospitals_all_measures: string;
    stage_2_hospitals_all_measures: string;
    syndromic_surveillance_measure: string;
}

export class HospitalData implements HospitalDataResponseI {
    public at_least_one_measure: string;
    public immunization_measure: string;
    public period: string;
    public region: string;
    public region_code: string; 
    public registry_measure: string;
    public reportable_lab_results_measure: string;
    public stage_1_hospitals_all_measures: string;
    public stage_2_hospitals_all_measures: string;
    public syndromic_surveillance_measure: string;

    constructor(res: any){
        this.at_least_one_measure = res.at_least_one_measure;
        this.immunization_measure = res.immunization_measure;
        this.period = res.period;
        this.region = res.region;
        this.region_code = res.region_code;
        this.registry_measure = res.registry_measure;
        this.reportable_lab_results_measure = res.reportable_lab_results_measure;
        this.stage_1_hospitals_all_measures = res.stage_1_hospitals_all_measures;
        this.stage_2_hospitals_all_measures = res.stage_2_hospitals_all_measures;
        this.syndromic_surveillance_measure = res.syndromic_surveillance_measure;
    }
}