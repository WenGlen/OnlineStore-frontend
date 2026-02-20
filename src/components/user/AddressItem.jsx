import { useState } from 'react';
import { addresses } from '../../data/userData';

export default function AddressItem({ 
  address, 
  isEditing = false,
  onEdit,
  onCancel,
  onSave
}) {
  const [formData, setFormData] = useState(address);

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    // 这里应该调用 API 保存数据
    onSave();
  };

  if (isEditing) {
    return (
      <div className="address-item">
        <div className="address-form">
          <div className="form-field">
            <label className="form-label">收件人</label>
            <input
              type="text"
              className="form-input"
              value={formData.recipient}
              onChange={(e) => handleChange('recipient', e.target.value)}
            />
          </div>
          <div className="form-field">
            <label className="form-label">地址</label>
            <input
              type="text"
              className="form-input"
              value={formData.address}
              onChange={(e) => handleChange('address', e.target.value)}
            />
          </div>
          <div className="form-field">
            <label className="form-label">聯絡電話</label>
            <input
              type="tel"
              className="form-input"
              value={formData.phone}
              onChange={(e) => handleChange('phone', e.target.value)}
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
      </div>
    );
  }

  return (
    <div className={`address-item ${address.isPrimary ? 'primary' : ''}`}>
      {address.isPrimary && (
        <span className="primary-badge">Primary</span>
      )}
      <div className="address-content">
        <div className="address-field">
          <span className="address-label">收件人</span>
          <span className="address-value">{address.recipient}</span>
        </div>
        <div className="address-field">
          <span className="address-label">地址</span>
          <span className="address-value">{address.address}</span>
        </div>
        <div className="address-field">
          <span className="address-label">聯絡電話</span>
          <span className="address-value">{address.phone}</span>
        </div>
      </div>
      <button className="edit-address-button" onClick={onEdit}>
        編輯
      </button>
    </div>
  );
}


