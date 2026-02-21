/**
 * 數量控制器
 * @param {number} value - 目前數量
 * @param {number} [min=1] - 最少量
 * @param {number} [max] - 最大數量（可選，未來由 API 庫存帶入）
 * @param {(newValue: number) => void} onChange - 數量變更時呼叫，傳入新值
 * @param {() => void} [onRequestRemove] - 可選。當在最小值時按下「−」時呼叫（例如購物車要彈出刪除確認）
 */
export default function QuantityController({
  value,
  min = 1,
  max,
  onChange,
  onRequestRemove,
  className = '',
}) {
  const atMin = value <= min;
  const atMax = max != null && value >= max;

  const handleDecrease = () => {
    if (atMin) {
      if (onRequestRemove) onRequestRemove();
      return;
    }
    onChange(value - 1);
  };

  const handleIncrease = () => {
    if (atMax) return;
    onChange(value + 1);
  };

  return (
    <div className={`relative ${className}`.trim()}>
      <div className="flex-row-center-center gap-2 bg-background rounded-md overflow-hidden">
        <button
          type="button"
          className="btn-stepper"
          onClick={handleDecrease}
          aria-label="減少數量"
        >
          −
        </button>
        <span className="w-8 text-center text-sm font-semibold text-default min-w-[2rem]">
          {value}
        </span>
        <button
          type="button"
          className="btn-stepper"
          onClick={handleIncrease}
          disabled={atMax}
          aria-label="增加數量"
        >
          +
        </button>
      </div>
      <div  className="absolute -bottom-6 left-0 w-full">
        <p className="text-xs text-error text-center">{atMax && max != null ? "已達數量上限" : "\u00A0"}</p>
      </div>
    </div>
  );
}
