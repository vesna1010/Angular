package students.converter;

import java.text.SimpleDateFormat;
import java.util.Date;
import com.fasterxml.jackson.databind.JavaType;
import com.fasterxml.jackson.databind.type.TypeFactory;
import com.fasterxml.jackson.databind.util.Converter;

public class DateToStringConverter implements Converter<Date, String> {

	SimpleDateFormat format = new SimpleDateFormat("dd-MM-yyyy");

	@Override
	public String convert(Date date) {
		return format.format(date);
	}

	@Override
	public JavaType getInputType(TypeFactory typeFactory) {
		return typeFactory.constructType(Date.class);
	}

	@Override
	public JavaType getOutputType(TypeFactory typeFactory) {
		return typeFactory.constructType(String.class);
	}

}
