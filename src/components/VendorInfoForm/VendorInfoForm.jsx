import { VendorInfoFormStyled } from "./VendorInfoForm.styled";

export default function VendorInfoForm() {
  return (
    <VendorInfoFormStyled>
      <form action="">
        <section className="vendorName">
          <label>
            First Name
            <input type="text" name="First Name" />
          </label>
          <label>
            Last Name
            <input type="text" name="Last Name" />
          </label>
        </section>

        <section className="businessName">
          <label>
            Business Name
            <input type="text" name="Business Name" />
          </label>
          <label>
            Business Category
            <select
              name="selectedOption"
              // value={formData.selectedOption}
              // onChange={handleSelectChange}
            >
              <option value=""> Videography</option>
              <option value="option1">Photographer</option>
              <option value="option2">Venue</option>
              <option value="option3">Florist</option>
            </select>
          </label>
        </section>

        <section className="imgUploadContainer">
          <label>
            <span>
              Upload a profile photo. Don't worry about using a business logo,
              we'll add one soon.
            </span>

            <input
              type="file"
              name="image"
              accept="image/*"
              className="imgPicker"
            />
          </label>
        </section>

        <section>
          <span>All Fields Required</span>
        </section>
        <button type="submit">Next</button>
      </form>
    </VendorInfoFormStyled>
  );
}
