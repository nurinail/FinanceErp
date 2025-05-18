import React from "react";
import classNames from "classnames";
import style from "./hr.module.scss";

const HR = () => {
  return <div className={style.hrComp}>
    <h2 className={style.hrComp_title}>İnsan Resursları</h2>
     <form  className={style.hrComp_form}>
        <div className={style.hrComp_form_input}>
            <label htmlFor="fullnameInput" className={style.hrComp_form_input_label}>Ad və Soyad</label>
            <input id='fullnameInput' name='fullname' type="text" className={style.hrComp_form_input_item} />
        </div>
        <div className={style.hrComp_form_input}>
            <label htmlFor="emailInput" className={style.hrComp_form_input_label}>Email</label>
            <input id='emailInput' name='email' type="email" className={style.hrComp_form_input_item}/>
        </div>
        <div className={style.hrComp_form_input}>
            <label htmlFor="phoneNumberInput" className={style.hrComp_form_input_label}>Telefon Nömrəsi</label>
            <input id='phoneNumberInput' name='phonenumber' type="number" className={style.hrComp_form_input_item}/>
        </div>
        <div className={style.hrComp_form_input}>
            <label htmlFor="positionInput" className={style.hrComp_form_input_label}>Vəzifə</label>
            <input id='positionInput' name='position' type="text" className={style.hrComp_form_input_item}/>
        </div>
        <div className={style.hrComp_form_input}>
               <label htmlFor="salaryInput" className={style.hrComp_form_input_label}>Maaş</label>
               <input id='salaryInput' name='salary' type="number" className={style.hrComp_form_input_item}/>
        </div>
        <div className={style.hrComp_form_input}>
               <label htmlFor="dateInput" className={style.hrComp_form_input_label}>Başlama Tarixi</label>
               <input id='dateInput' name='date' type="date" className={style.hrComp_form_input_item}/>
        </div>
            <div className={style.hrComp_form_input}>
               <label htmlFor="department" className={style.hrComp_form_input_label}>Departament</label>
               <select name="department" id="department"  className={classNames(style.hrComp_form_input_item)}>
                    <option value="">Departament Seç</option>
                    <option value="hr">İnsan Resursları (HR)</option>
                    <option value="finance">Maliyyə</option>
                    <option value="accounting">Mühasibat</option>
                    <option value="marketing">Marketinq</option>
                    <option value="sales">Satış</option>
                    <option value="customer-service">Müştəri Xidmətləri</option>
                    <option value="it">İnformasiya Texnologiyaları (IT)</option>
                    <option value="logistics">Logistika</option>
                    <option value="legal">Hüquq</option>
                    <option value="r&d">Tədqiqat və İnkişaf (R&D)</option>
                    <option value="pr">İctimai Əlaqələr (PR)</option>
                    <option value="administration">İdarəetmə</option>
                    <option value="qa">Daxili Nəzarət</option>
               </select>
            </div>
            <div className={style.hrComp_form_input}>
               <label htmlFor="workplaceType" className={style.hrComp_form_input_label}>İş yerinin növü</label>
               <select name="workplacetype" id="workplaceType" className={classNames(style.hrComp_form_input_item)}>
                    <option value="">İş yerinin növü seç</option>
                    <option value="office">Ofis</option>
                    <option value="remote">Uzaqdan</option>
                    <option value="hybrid">Hibrid</option>
               </select>
            </div>
          
         
        <button type='submit' className={style.hrComp_form_submit}>Əlavə Et</button>

      </form>
      <div className={style.hrComp_table}>
        <h2 className={style.hrComp_table_title}>İşçilər</h2>
      <table className={style.hrComp_table_wrapper}>
        <thead>
            <tr className={style.hrComp_table_wrapper_thead_row}>
                <th>№</th>
                <th>Ad Soyad</th>
                <th>Email</th>
                <th>Telefon Nömrəsi</th>
                <th>Vəzifə</th>
                <th>Maaş</th>
                <th>Başlama Tarixi</th>
                <th>Departament</th>
                <th>İşləmə Yeri</th>
                <th>Əməliyyat</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>Nail Nuri</td>
                <td>nurinail2003@gmail.com</td>
                <td>+994 77 641 06 12</td>
                <td>Mühasib</td>
                <td>2700</td>
                <td>15-05-2025</td>
                <td>Maliyyə</td>
                <td>Hibrid</td>
                <td className={style.hrComp_table_wrapper_buttons}>
                    <button className={style.hrComp_table_wrapper_buttons_item}>Düzəliş</button>
                    <button className={classNames(style.hrComp_table_wrapper_buttons_item,style.deleteBtn)}>Sil</button>
                </td>
            </tr>
            <tr>
                <td>2</td>
                <td>Nail Nuri</td>
                <td>nurinail2003@gmail.com</td>
                <td>+994 77 641 06 12</td>
                <td>Mühasib</td>
                <td>2700</td>
                <td>15-05-2025</td>
                <td>Maliyyə</td>
                <td>Hibrid</td>
                <td className={style.hrComp_table_wrapper_buttons}>
                    <button className={style.hrComp_table_wrapper_buttons_item}>Düzəliş</button>
                    <button className={classNames(style.hrComp_table_wrapper_buttons_item,style.deleteBtn)}>Sil</button>
                </td>
            </tr>
            <tr>
                <td>3</td>
                <td>Nail Nuri</td>
                <td>nurinail2003@gmail.com</td>
                <td>+994 77 641 06 12</td>
                <td>Mühasib</td>
                <td>2700</td>
                <td>15-05-2025</td>
                <td>Maliyyə</td>
                <td>Hibrid</td>
                <td className={style.hrComp_table_wrapper_buttons}>
                    <button className={style.hrComp_table_wrapper_buttons_item}>Düzəliş</button>
                    <button className={classNames(style.hrComp_table_wrapper_buttons_item,style.deleteBtn)}>Sil</button>
                </td>
            </tr>
        </tbody>
        
      </table>

      </div>
    
  </div>;
};

export default HR;
