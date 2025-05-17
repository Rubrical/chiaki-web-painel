export class Ban {
  id?: number;
  userRemoteJid?: string;
  motivoBan?: string;
  dataCadastro?: Date;
  dataInativo?: Date;
}

export class BanList {
  bannedUsersFromGroup?: Ban[];
  bannedQuantity?: number;
}
