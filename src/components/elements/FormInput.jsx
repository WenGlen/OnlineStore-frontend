/**
 * 表單欄位：label + input，與 ConfirmPage 等表單頁共用的樣式與排版。
 * @param {string} label - 欄位標籤文字
 * @param {object} [inputProps] - 傳給 input 的 props（value, onChange, placeholder, disabled, type, id 等）
 */
export default function FormInput({ label, ...inputProps }) {
    return (
        <label className="w-full flex flex-col gap-1 md:flex-row md:items-center md:gap-2">
            <span className="form-label">{label}</span>
            <input
                type="text"
                className="flex-1 min-w-0"
                {...inputProps}
            />
        </label>
    );
}
