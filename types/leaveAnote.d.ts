export interface LeaveAnoteRefInterface {
  visible: Ref<boolean>,
  showModal: () => void,
  onClose: () => void,
  handleOk: () => void,
}

interface AnoteFormState {
  member_name: string;
  phone: number | null;
  company_name: string;
  email: string;
  msg: string;
  phone_code: number;
}