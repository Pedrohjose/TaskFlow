package br.senai.taskflow.modelo.dao.Usuario;

import br.senai.taskflow.modelo.entidade.usuario.Usuario;
import java.util.List;

public interface UsuarioDAO {
    void cadastrarUsuario(Usuario usuario);
    void alterarUsuario(Usuario usuario);
    void inativarUsuario(Usuario usuario);
    void deletarUsuario(Long id);
    Usuario consultarUsuario(Long id);
    List<Usuario> listarUsuarios();
}