import { useState } from 'react';

export default function AddressForm({ onSave, onCancel }) {
  const [formData, setFormData] = useState({
    recipient: '',
    address: '',
    phone: ''
  });

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    // 这里应该调用 API 保存数据
    onSave();
  };

  return (
    <div className="address-form">
      <div className="form-field">
        <label className="form-label">收件人</label>
        <input
          type="text"
          className="form-input"
          value={formData.recipient}
          onChange={(e) => handleChange('recipient', e.target.value)}
          placeholder="請輸入收件人姓名"
        />
      </div>
      <div className="form-field">
        <label className="form-label">地址</label>
        <input
          type="text"
          className="form-input"
          value={formData.address}
          onChange={(e) => handleChange('address', e.target.value)}
          placeholder="請輸入完整地址"
        />
      </div>
      <div className="form-field">
        <label className="form-label">聯絡電話</label>
        <input
          type="tel"
          className="form-input"
          value={formData.phone}
          onChange={(e) => handleChange('phone', e.target.value)}
          placeholder="請輸入聯絡電話"
        />
      </div>
      <div className="form-actions">
        <button className="save-button" onClick={handleSave}>
          儲存
        </button>
        <button className="cancel-button" onClick={onCancel}>
          取消
        </button>
      </div>
    </div>
  );
}


