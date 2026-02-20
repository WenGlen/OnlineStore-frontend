import { useState } from 'react';
import { userProfile } from '../../data/userData';

export default function ProfileSection() {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(userProfile);
  const [saveMessage, setSaveMessage] = useState('');

  const handleEdit = () => {
    setIsEditing(true);
    setSaveMessage('');
  };

  const handleCancel = () => {
    setIsEditing(false);
    setFormData(userProfile);
    setSaveMessage('');
  };

  const handleSave = () => {
    // 这里应该调用 API 保存数据
    setIsEditing(false);
    setSaveMessage('已儲存');
    setTimeout(() => setSaveMessage(''), 3000);
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section className="profile-section">
      <div className="section-header">
        <h2 className="section-title">Profile</h2>
        {!isEditing && (
          <button className="edit-button" onClick={handleEdit}>
            Edit
          </button>
        )}
      </div>

      <div className="profile-content">
        {!isEditing ? (
          <div className="profile-display">
            <div className="profile-field">
              <span className="profile-label">姓名</span>
              <span className="profile-value">{userProfile.name}</span>
            </div>
            <div className="profile-field">
              <span className="profile-label">Email</span>
              <span className="profile-value">{userProfile.email}</span>
            </div>
            <div className="profile-field">
              <span className="profile-label">聯絡電話</span>
              <span className="profile-value">{userProfile.phone}</span>
            </div>
          </div>
        ) : (
          <div className="profile-form">
            <div className="form-field">
              <label className="form-label">姓名</label>
              <input
                type="text"
                className="form-input"
                value={formData.name}
                onChange={(e) => handleChange('name', e.target.value)}
              />
            </div>
            <div className="form-field">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-input"
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
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
            {saveMessage && (
              <div className="save-message">{saveMessage}</div>
            )}
            <div className="form-actions">
              <button className="save-button" onClick={handleSave}>
                儲存
              </button>
              <button className="cancel-button" onClick={handleCancel}>
                取消
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}


