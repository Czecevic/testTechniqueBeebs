import { format, parseISO } from "date-fns";
import { fr } from "date-fns/locale";

export const formatDate = (date: string) => {
  return format(parseISO(date), "dd/MM/yyyy", { locale: fr });
};
