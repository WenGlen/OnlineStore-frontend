import { useState } from 'react';
import { addresses } from '../../data/userData';
import AddressItem from './AddressItem';
import AddressForm from './AddressForm';

export default function AddressesSection() {
  const [isAdding, setIsAdding] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const handleAdd = () => {
    setIsAdding(true);
    setEditingId(null);
  };

  const handleEdit = (id) => {
    setEditingId(id);
    setIsAdding(false);
  };

  const handleCancel = () => {
    setIsAdding(false);
    setEditingId(null);
  };

  const handleSave = () => {
    // 这里应该调用 API 保存数据
    setIsAdding(false);
    setEditingId(null);
  };

  return (
    <section className="addresses-section">
      <div className="section-header">
        <h2 className="section-title">Addresses</h2>
        {!isAdding && !editingId && (
          <button className="add-button" onClick={handleAdd}>
            新增地址
          </button>
        )}
      </div>

      <div className="addresses-list">
        {addresses.map((address) => (
          <AddressItem
            key={address.id}
            address={address}
            isEditing={editingId === address.id}
            onEdit={() => handleEdit(address.id)}
            onCancel={handleCancel}
            onSave={handleSave}
          />
        ))}
      </div>

      {isAdding && (
        <AddressForm
          onSave={handleSave}
          onCancel={handleCancel}
        />
      )}
    </section>
  );
}


