package students.repository;

import java.io.Serializable;
import java.util.List;

public interface GenericRepository<T extends Serializable, ID extends Serializable> {

	List<T> findAll();

	T findOne(ID id);

	boolean existsById(ID id);

	void save(T e);

	void update(T e);

	void deleteById(ID id);

}
